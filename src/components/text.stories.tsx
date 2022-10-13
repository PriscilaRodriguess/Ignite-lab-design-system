import {Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'components/text',
    component: Text,
    args: {
        children: 'lorem ipsum.',
        size: 'nd',
    },
    argTypes: {
       size: {
        options: ['sm', 'nd', 'lg'],
        control: {
            type:'inline-radio'
       }
    }
 }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sn'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>text with p tag</p>
               
            
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
          },
          asChild: {
            table: {
                disable: true,
            }
          }
      }
}