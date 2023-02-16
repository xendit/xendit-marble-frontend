import { Pushtolive } from '@marble-front/ui/icons';
import type { Story, Meta } from '@storybook/react';
import { Button } from '../Button/Button';
import { Modal } from './Modal';

const Story: Meta<typeof Modal> = {
  component: Modal.Root,
  title: 'Modal',
};
export default Story;

const Template: Story<typeof Modal> = (args) => (
  <Modal.Root {...args}>
    <Modal.Trigger asChild>
      <Button>Trigger</Button>
    </Modal.Trigger>
    <Modal.Portal>
      <Modal.Content>
        <Modal.Title>Modal title</Modal.Title>
        <div className="bg-grey-00 flex flex-col gap-8 p-8">
          <Modal.Description>
            This is the the modal description
          </Modal.Description>
          <div className="flex flex-1 flex-row gap-2">
            <Modal.Close asChild>
              <Button variant="secondary" className="flex-1">
                Cancel
              </Button>
            </Modal.Close>
            <Button variant="primary" className="flex-1">
              <Pushtolive height="24px" width="24px" />
              Publish
            </Button>
          </div>
        </div>
      </Modal.Content>
    </Modal.Portal>
  </Modal.Root>
);

export const Primary = Template.bind({});
Primary.args = {};
