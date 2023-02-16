import LargeFactory from '../../components/largeFactory/LargeFactory';
import MediumFactory from '../../components/mediumFactory/MediumFactory';
import SmallFactory from '../../components/smallFactory/SmallFactory';

export function multiplyProductionByLevel(
  factory: SmallFactory | MediumFactory | LargeFactory,
  level: number,
): number {
  let production = factory.initProduction;

  for (let i = 1; i < level; i++) {
    production = Math.round(production * factory.upgradeMultiplier);
  }

  return production;
}
