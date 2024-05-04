import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title: 'From/Button',
    component: Button,

    args: {
       Children: 'Send',
       variant: 'primary',
       size: 'md',
       disabled: false,
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio',
            }
        },
        size: {
            options: ['sm', 'md'],
            control: {
                type: 'inline-radio',
            }
        },
        disabled: {
            control: {
                type: 'boolean',
            }
        },

        onClick: {
            action: 'click',
        },
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary',
        Children: 'Create new',
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary',
        Children: 'Cancel',
    }
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: 'sm',
    },
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        Children:  (
        <>
            Próximo Passo 
            <ArrowRight weight="bold" />
        </>
    )
    },
}


export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true,
    },
}

