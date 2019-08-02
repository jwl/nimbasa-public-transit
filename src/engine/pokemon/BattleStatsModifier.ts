export class BattleStatModifiers {
  private attackStage: number;
  private defenseStage: number;
  private spAtkStage: number;
  private spDefStage: number;
  private speedStage: number;
  private accuracyStage: number;
  private evasionStage: number;

  constructor() {
    this.attackStage = 0;
    this.defenseStage = 0;
    this.spAtkStage = 0;
    this.spDefStage = 0;
    this.speedStage = 0;
    this.accuracyStage = 0;
    this.evasionStage = 0;
  }

  public getNamedStat(statName: string): number {
    switch (statName) {
      case "attack":
        return this.attackStage;
        break;
      case "defense":
        return this.defenseStage;
        break;
      case "spAtk":
        return this.spAtkStage;
        break;
      case "spDef":
        return this.spDefStage;
        break;
      case "speed":
        return this.speedStage;
        break;
      case "accuracy":
        return this.accuracyStage;
        break;
      case "evasion":
        return this.evasionStage;
        break;
      default:
        // TODO: implement exceptions
        return -1;
    }
  }

  public modNamedStat(statName: string, modifier: number): boolean {
    let namedStat: number = this.getNamedStat(statName);
    if (namedStat == 3 || namedStat == -3) {
      return false;
    }
    namedStat += modifier;
    switch (statName) {
      case "attack":
        this.setAttackStage(namedStat);
        break;
      case "defense":
        this.setDefenseStage(namedStat);
        break;
      case "spAtk":
        this.setSpAttackStage(namedStat);
        break;
      case "spDef":
        this.setSpDefStage(namedStat);
        break;
      case "speed":
        this.setSpeedStage(namedStat);
        break;
      case "accuracy":
        this.setAccuracyStage(namedStat);
        break;
      case "evasion":
        this.setEvasionStage(namedStat);
        break;
      default:
        return false;
    }
    return true;
  }

  private setAttackStage(attackStage: number): void {
    this.attackStage = attackStage;
  }
  private setDefenseStage(defenseStage: number): void {
    this.defenseStage = defenseStage;
  }
  private setSpAttackStage(spAtkStage: number): void {
    this.spAtkStage = spAtkStage;
  }
  private setSpDefStage(spDefStage: number): void {
    this.spDefStage = spDefStage;
  }
  private setSpeedStage(speedStage: number): void {
    this.speedStage = speedStage;
  }
  private setAccuracyStage(accuracyStage: number): void {
    this.accuracyStage = accuracyStage;
  }
  private setEvasionStage(evasionStage: number): void {
    this.evasionStage = evasionStage;
  }
}
