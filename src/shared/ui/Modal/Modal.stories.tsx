import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useBoolean } from 'shared/hooks';
import { Modal } from '.';
import { Button } from '../Button';

export default {
  title: 'ui/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const modal = useBoolean();
  return (
    <div>
      <Button onClick={modal.setTrue}>Open modal</Button>
      <Modal {...args} open={modal.state} onClose={modal.setFalse} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: <div>sdfsdfsfdsf</div>,
};
