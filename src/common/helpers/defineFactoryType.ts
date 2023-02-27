import LargeFactory from '../../components/largeFactory/LargeFactory';
import MediumFactory from '../../components/mediumFactory/MediumFactory';
import SmallFactory from '../../components/smallFactory/SmallFactory';
import { FACTORY_TYPES } from './constants';

export function defineFactoryType(
  factory: SmallFactory | MediumFactory | LargeFactory,
): string {
  const factoryType =
    factory instanceof SmallFactory
      ? FACTORY_TYPES.s
      : factory instanceof MediumFactory
      ? FACTORY_TYPES.m
      : FACTORY_TYPES.l;

  return factoryType;
}
