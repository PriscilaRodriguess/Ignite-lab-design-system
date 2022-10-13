import {Meta, StoryObj} from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'components/button',
    component: Button,
    args: {
        children: 'Criate account',
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    argTypes:{
        asChild:{
            table:{
                disable:true,
            }
        }
    }
}
