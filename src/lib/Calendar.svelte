<script lang="ts">
	import { onMount } from 'svelte';
	import type { CalendarPlan, CalendarType } from './types.js';

	const {
		plans = $bindable(),
		type = 'monthly'
	}: {
		plans: CalendarPlan[];
		type?: CalendarType;
	} = $props();
	let currYear = $state(0);
	let selectedYear = $state(0);
	let currMonth = $state(0);
	let selectedMonth = $state(0);
	let currDay = $state(0);
	let selectedDay = $state(0);
	let startingDay = $state(0);
	let maxDays = $state(0);
	const date = new Date(Date.now());
	let rows: (number | null)[][] = $state([]);
	let rightBorderFlags: boolean[][] = $state([]);
	let bottomBorderFlags: boolean[][] = $state([]);

	onMount(() => {
		currYear = date.getFullYear();
		selectedYear = date.getFullYear();
		currMonth = date.getMonth();
		selectedMonth = date.getMonth();
		currDay = date.getDate();
		selectedDay = date.getDate();
		startingDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
		maxDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

		updateRowsAndBorders();
	});

	function updateRowsAndBorders() {
		if (type === 'monthly') {
			rows = [];
			rightBorderFlags = [];
			bottomBorderFlags = [];
			let day = 1 - startingDay;
			while (day <= maxDays) {
				const row = Array.from({ length: 7 }, () => {
					const currentDay = day++;
					return currentDay > 0 && currentDay <= maxDays ? currentDay : null;
				});
				rows.push(row);
				rightBorderFlags.push(row.map((day, index) => day === null && row[index + 1] !== null));
			}
			for (let i = 0; i < rows.length; i++) {
				bottomBorderFlags.push(
					rows[i].map((day, index) => day === null && rows[i + 1] && rows[i + 1][index] !== null)
				);
			}
		} else if (type === 'weekly') {
			rows = Array.from({ length: 1 }, (_, i) => {
				const row = Array.from({ length: 7 }, (_, j) => {
					const day = selectedDay - startingDay + j;
					return day > 0 && day <= maxDays ? day : null;
				});
				return row;
			});
			rightBorderFlags = rows.map((row) =>
				row.map((day, index) => day === null && row[index + 1] !== null)
			);
			bottomBorderFlags = rows.map((row) =>
				row.map((day, index) => day === null && rows[1] && rows[1][index] !== null)
			);
		}
	}

	function selectYear(year: number) {
		selectedYear = year;
		selectMonth(selectedMonth);
	}

	function selectMonth(month: number) {
		if (month < 0) {
			selectedYear--;
			month = 11;
		} else if (month > 11) {
			selectedYear++;
			month = 0;
		}

		selectedMonth = month;
		startingDay = new Date(selectedYear, month, 1).getDay();
		maxDays = new Date(selectedYear, month + 1, 0).getDate();

		updateRowsAndBorders();
	}

	function parseDate(dateStr: string): Date {
		const [day, month, year] = dateStr.split('/').map(Number);
		return new Date(year, month - 1, day);
	}

	function isPlanOnDay(plan: CalendarPlan, day: number) {
		const planStartDate = parseDate(plan.startDate);
		const planEndDate = plan.endDate ? parseDate(plan.endDate) : planStartDate;
		const currentDate = new Date(selectedYear, selectedMonth, day);

		return currentDate >= planStartDate && currentDate <= planEndDate;
	}
</script>

<div class={`calendar-${type}`}>
	<div class="month-header">
		<button onclick={() => selectYear(selectedYear - 1)}>&lt;</button>
		<span>{selectedYear}</span>
		<button onclick={() => selectYear(selectedYear + 1)}>&gt;</button>
		<button onclick={() => selectMonth(selectedMonth - 1)}>&lt;</button>
		<span>{selectedMonth + 1}</span>
		<button onclick={() => selectMonth(selectedMonth + 1)}>&gt;</button>
	</div>
	<div class="headers">
		<div class="day">S</div>
		<div class="day">M</div>
		<div class="day">T</div>
		<div class="day">W</div>
		<div class="day">T</div>
		<div class="day">F</div>
		<div class="day">S</div>
	</div>
	{#each rows as row, i}
		<div class="week">
			{#each row as day, j}
				<div
					class={`day-${type} ${day === null ? 'null-day' : ''} ${rightBorderFlags[i][j] && !(day === null && j === 6) ? 'right-border' : ''} ${bottomBorderFlags[i][j] ? 'bottom-border' : ''}`}
				>
					{#if day !== null}
						<div class="day-number">{day}</div>
						<div class="plans">
							{#each plans.filter((plan) => isPlanOnDay(plan, day)) as plan}
								<div class="plan">
									<div class="plan-title">{plan.title}</div>
									{#if plan.allDay}
										<div class="plan-time">All Day</div>
									{:else}
										<div class="plan-time">{plan.startTime} - {plan.endTime}</div>
									{/if}
									<div class="plan-description">{plan.description}</div>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.calendar-monthly {
		display: flex;
		flex-direction: column;
		margin: 5px;

		.week {
			display: grid;
			grid-template-columns: repeat(7, 1fr);

			.day-monthly {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				height: 150px;
				border: 1px solid rgba(0, 0, 0, 0.2);
				border-top: none;
				border-left: none;
				&:first-child {
					border-left: 1px solid rgba(0, 0, 0, 0.2);
				}
				&:nth-child(7n + 1) {
					border-left: 1px solid rgba(0, 0, 0, 0.2);
				}
				padding: 2px;
				position: relative;

				&.null-day {
					border: none;
				}

				&.right-border {
					border-right: 1px solid rgba(0, 0, 0, 0.2);
				}

				&.bottom-border {
					border-bottom: 1px solid rgba(0, 0, 0, 0.2);
				}

				.day-number {
					font-weight: bold;
					margin-bottom: 5px;
				}

				.plans {
					width: 100%;
					overflow-y: auto;
					max-height: 120px;

					.plan {
						background-color: #e0f7fa;
						border: 1px solid #00acc1;
						border-radius: 3px;
						margin: 2px 0;
						padding: 2px 5px;
						font-size: 0.8em;

						.plan-title {
							font-weight: bold;
						}

						.plan-time {
							font-weight: bold;
						}

						.plan-description {
							font-size: 0.75em;
						}
					}
				}
			}
		}

		.headers {
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			gap: 1px;
			font-weight: bold;
			background-color: #f0f0f0;
			height: fit-content;
			text-align: center;
			border: 1px solid rgba(0, 0, 0, 0.2);
		}
	}

	.calendar-weekly {
		display: flex;
		flex-direction: column;
		margin: 5px;

		.week {
			display: grid;
			grid-template-columns: repeat(7, 1fr);

			.day-weekly {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				height: 200px;
				border: 1px solid rgba(0, 0, 0, 0.2);
				border-top: none;
				border-left: none;
				&:first-child {
					border-left: 1px solid rgba(0, 0, 0, 0.2);
				}
				&:nth-child(7n + 1) {
					border-left: 1px solid rgba(0, 0, 0, 0.2);
				}
				padding: 2px;
				position: relative;

				&.null-day {
					border: none;
				}

				&.right-border {
					border-right: 1px solid rgba(0, 0, 0, 0.2);
				}

				&.bottom-border {
					border-bottom: 1px solid rgba(0, 0, 0, 0.2);
				}

				.day-number {
					font-weight: bold;
					margin-bottom: 5px;
				}

				.plans {
					width: 100%;
					overflow-y: auto;
					max-height: 170px;

					.plan {
						background-color: #e0f7fa;
						border: 1px solid #00acc1;
						border-radius: 3px;
						margin: 2px 0;
						padding: 2px 5px;
						font-size: 0.8em;

						.plan-time {
							font-weight: bold;
						}

						.plan-description {
							font-size: 0.75em;
						}
					}
				}
			}
		}

		.headers {
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			gap: 1px;
			font-weight: bold;
			background-color: #f0f0f0;
			height: fit-content;
			text-align: center;
			border: 1px solid rgba(0, 0, 0, 0.2);
		}
	}

	.day-monthly,
	.day-weekly {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		height: 150px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-top: none;
		border-left: none;
		&:first-child {
			border-left: 1px solid rgba(0, 0, 0, 0.2);
		}
		&:nth-child(7n + 1) {
			border-left: 1px solid rgba(0, 0, 0, 0.2);
		}
		padding: 2px;
		position: relative;

		&.null-day {
			border: none;
		}

		&.right-border {
			border-right: 1px solid rgba(0, 0, 0, 0.2);
		}

		&.bottom-border {
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		}

		.day-number {
			font-weight: bold;
			margin-bottom: 5px;
		}

		.plans {
			width: 100%;
			overflow-y: auto;
			max-height: 120px;

			.plan {
				background-color: #e0f7fa;
				border: 1px solid #00acc1;
				border-radius: 3px;
				margin: 2px 0;
				padding: 2px 5px;
				font-size: 0.8em;

				.plan-title {
					font-weight: bold;
				}

				.plan-time {
					font-weight: bold;
				}

				.plan-description {
					font-size: 0.75em;
				}
			}
		}
	}
</style>
