class Pokemon {
  private name: string;
  private currHP: number;

  constructor(name: string, currHP: number) {
    this.name = name;
    this.currHP = currHP;
  }

  getName(): string {
    return this.name;
  }

  getCurrHP(): number {
    return this.currHP;
  }

  setCurrHP(newHealth: number) {
    this.currHP = newHealth;
    if (this.currHP < 0) {
      this.currHP = 0;
    }
  }

  isAlive(): boolean {
    if (this.currHP > 0) {
      return true;
    } else {
      return false;
    }
  }
}
