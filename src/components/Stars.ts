class Stars {
    countStars(totalTurns: number, gameTurns: number, mvps: number, streak: number): number {
      const star1 = this.totalTurnStars(totalTurns);
      const star2 = this.gameTurnStars(gameTurns);
      const star3 = this.mvpStars(mvps);
      const star4 = this.streakStars(streak);
      return Math.ceil(this.median([star1, star2, star3, star4]));
    }
  
    private median(values: number[]): number {
      values.sort((a, b) => a - b);
      const mid = Math.floor(values.length / 2);
      return values.length % 2 !== 0 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
    }
  
    private streakStars(streak: number): number {
      return streak > 24 ? 5 : streak > 9 ? 4 : streak > 4 ? 3 : streak > 2 ? 2 : 1;
    }
  
    private mvpStars(mvps: number): number {
      return mvps > 24 ? 5 : mvps > 9 ? 4 : mvps > 4 ? 3 : mvps > 0 ? 2 : 1;
    }
  
    private gameTurnStars(gameTurns: number): number {
      return gameTurns > 39 ? 5 : gameTurns > 24 ? 4 : gameTurns > 9 ? 3 : gameTurns > 4 ? 2 : 1;
    }
  
    private totalTurnStars(totalTurns: number): number {
      return totalTurns > 99 ? 5 : totalTurns > 49 ? 4 : totalTurns > 24 ? 3 : totalTurns > 9 ? 2 : 1;
    }
  }
  
  export default Stars;
  