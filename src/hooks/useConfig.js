import { ConfigContext } from 'contexts/ConfigContext';
import { useContext } from 'react';

const useConfig = () => useContext(ConfigContext);

export default useConfig;