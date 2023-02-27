import LargeFactory from '../../components/largeFactory/LargeFactory';
import MediumFactory from '../../components/mediumFactory/MediumFactory';
import SmallFactory from '../../components/smallFactory/SmallFactory';

export function multiplyUpgradeCostByLevel(
  factory: SmallFactory | MediumFactory | LargeFactory,
  level: number,
): number {
  let cost = factory.initUpgradePrice;

  for (let i = 1; i < level; i++) {
    cost = Math.round(cost * factory.upgradeMultiplier);
  }

  return cost;
}
