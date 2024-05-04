import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "@ignite-ui/react"


export default {
    title: 'Typography/Text',
    component: Text,

    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt ea, laboriosam facere totam quaerat eveniet placeat magni laborum nihil consequatur eligendi earum possimus! Eaque itaque consectetur beatae voluptates accusamus!,'
    },
    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: {
                type: 'inline-radio',
            }
        },
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args: {
        Children: 'Strong Text',
        as: 'strong',
    }
}
