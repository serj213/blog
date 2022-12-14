import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification/interface';

const notifications = (message: string, description?: string) => {
  const config: ArgsProps = {
    message,
    description,
    duration: 5,
  };
  return {
    success: () => notification.success(config),
    error: () => notification.error(config),
    warn: () => notification.warning(config),
  };
};

export default notifications;
