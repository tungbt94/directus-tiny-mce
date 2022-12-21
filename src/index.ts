import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'extension-tinymce',
	name: 'Tiny MCE',
	icon: 'add_box',
	description: 'Rich text editor custom for deepblue',
	component: InterfaceComponent,
	types: ['text'],
	options: [
		{
			field: 'placeholder',
			name: '$t:placeholder',
			meta: {
				width: 'half',
				interface: 'text-input',
				options: {
					placeholder: '$t:enter_a_placeholder',
				},
			},
		},,
		{
			field: 'tools',
			name: '$t:interfaces.input-rich-text-html.toolbar',
			type: 'json',
			schema: {
				default_value: ['header', 'nestedlist', 'code', 'image', 'paragraph', 'delimiter', 'checklist', 'quote', 'underline'],
			},
			meta: {
				width: 'half',
				interface: 'select-multiple-dropdown',
				options: {
					choices: [
						{
							value: 'header',
							text: 'Header',
						},
						{
							value: 'list',
							text: 'List (legacy)',
						},
						{
							value: 'nestedlist',
							text: 'Nested List',
						},
						{
							value: 'embed',
							text: 'Embed',
						},
						{
							value: 'paragraph',
							text: 'Paragraph',
						},
						{
							value: 'code',
							text: 'Code',
						},
						{
							value: 'image',
							text: 'Image',
						},
						{
							value: 'warning',
							text: 'Warning',
						},
						{
							value: 'attaches',
							text: 'Attaches',
						},
						{
							value: 'table',
							text: 'Table',
						},
						{
							value: 'quote',
							text: 'Quote',
						},
						{
							value: 'marker',
							text: 'Marker',
						},
						{
							value: 'simpleimage',
							text: 'Simple Image',
						},
						{
							value: 'underline',
							text: 'Underline',
						},
						{
							value: 'inlinecode',
							text: 'Inline Code',
						},
						{
							value: 'alert',
							text: 'Alert',
						},
						{
							value: 'strikethrough',
							text: 'Strikethrough',
						},
						{
							value: 'delimiter',
							text: 'Delimiter',
						},
						{
							value: 'alignmentTune',
							text: 'Alignment',
						},
						{
							value: 'checklist',
							text: 'Checklist',
						},
						{
							value: 'personality',
							text: 'Personality',
						},
						{
							value: 'raw',
							text: 'Raw HTML',
						},
					],
				},
			},
		},
	],
});
