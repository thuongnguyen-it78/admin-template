import { PermissionContext } from 'contexts/PermissionContext';
import { useContext } from 'react';

const usePermission = () => useContext(PermissionContext);

export default usePermission;