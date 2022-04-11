import { initialStats } from '../constants/initialStats';

export const addGamePlayed = (setStatistics, statistics) => {
	setStatistics({
		...statistics,
		gamesPlayed: (statistics.gamesPlayed += 1),
		maxStreak:
			statistics.maxStreak <= statistics.currentStreak
				? statistics.currentStreak
				: statistics.maxStreak,
	});
};

export const addVictory = (setStatistics, statistics) => {
	setStatistics({
		...statistics,
		gamesWon: (statistics.gamesWon += 1),
		currentStreak: (statistics.currentStreak += 1),
	});
};

export const addDefeat = (setStatistics, statistics) => {
	console.log(statistics);
	setStatistics({
		...statistics,
		currentStreak: 0,
	});
	console.log(statistics.currentStreak);
};

export const hasNoStats = (setStatistics, win) => {
	setStatistics(initialStats(win));
};
