import {LoginComponent} from './login.component';
import {ButtonModule} from '../button/button.module';
import {FormGroupModule} from '../form-group/form-group.module';
import {InputModule} from '../input/input.module';
import {moduleMetadata} from '@storybook/angular';
import {DefaultInput} from '../input/input.stories';
import {DefaultFormGroup} from '../form-group/form-group.stories';
import {ButtonComponent} from '../button/button.component';

export default {
  title: 'Components/Login',
  decorators: [
    moduleMetadata({
      imports: [InputModule, FormGroupModule, ButtonModule]
    })
  ]
};


const Template = (args: LoginComponent) => ({
  component: LoginComponent,
  props: args,
});

export const DefaultLogin = Template.bind({});

DefaultLogin.args = {
};
