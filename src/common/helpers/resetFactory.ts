import LargeFactory from '../../components/largeFactory/LargeFactory';
import MediumFactory from '../../components/mediumFactory/MediumFactory';
import SmallFactory from '../../components/smallFactory/SmallFactory';
import { multiplyProductionByLevel } from './multiplyProductionByLevel';
import { multiplyUpgradeCostByLevel } from './multiplyUpgradeCostByLevel';

export function resetFactory(
  factory: SmallFactory | MediumFactory | LargeFactory,
  level: number,
): void {
  factory.currentLevel = level;
  factory.cookieProduction = multiplyProductionByLevel(factory, level);
  factory.upgradePrice = multiplyUpgradeCostByLevel(factory, level);
}
