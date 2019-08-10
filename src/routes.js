import ComponentFilters from './content/ComponentFilters';
import EditingPropsAndState from './content/EditingPropsAndState';
import ElementSelectorTool from './content/ElementSelectorTool';
import ExploringOwners from './content/ExploringOwners';
import HigherOrderComponents from './content/HigherOrderComponents';
import Profiling from './content/Profiling';
import SharingProfileData from './content/SharingProfileData';
import TogglingSuspenseFallbacks from './content/TogglingSuspenseFallbacks';

const ROUTES = {
  '/element-selector-tool': ElementSelectorTool,
  '/component-filters': ComponentFilters,
  '/editing-props-and-state': EditingPropsAndState,
  '/exploring-owners': ExploringOwners,
  '/higher-order-components': HigherOrderComponents,
  '/toggling-suspense-fallbacks': TogglingSuspenseFallbacks,
  '/profiling': Profiling,
  '/sharing-profile-data': SharingProfileData,
};

export default ROUTES;