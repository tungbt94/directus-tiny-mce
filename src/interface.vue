<template>
  <editor
    v-model="content"
    :api-key="key"
    :init="{
				height: 500,
				menubar: false,
				plugins: [
					'a11ychecker',
					'advlist',
					'advcode',
					'advtable',
					'autolink',
					'checklist',
					'export',
					'lists',
					'link',
					'image',
					'charmap',
					'preview',
					'anchor',
					'searchreplace',
					'visualblocks',
					'powerpaste',
					'fullscreen',
					'formatpainter',
					'insertdatetime',
					'media',
					'table',
					'help',
					'wordcount',
				],
				toolbar:
					'undo redo | formatselect | bold italic backcolor | \
						           				 alignleft aligncenter alignright alignjustify | \
						           				 bullist numlist outdent indent | removeformat | link table| image | checklist | export | Chip-Coin | Chip-Terminology-or-Related-Article',
				contextmenu: false,
				selector: '#tinymce',
				branding: false,
				setup: (editor: any) => {
					editor.ui.registry.addButton('Chip-Coin', {
						text: 'Chip-Coin',
						onAction: () => {
							handleClickChipCoin()
						},
					})
					editor.ui.registry.addButton('Chip-Terminology-or-Related-Article', {
						text: 'Chip-Terminology or Related-Article',
						onAction: () => {
							handleClickChipTerminologyOrRelated()
						},
					})
				}
			}"
  />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import Editor from '@tinymce/tinymce-vue';
import { getTinymce } from '@tinymce/tinymce-vue/lib/cjs/main/ts/TinyMCE';

import tinymce from 'tinymce'

import 'tinymce/icons/default'

 /* Import content css */
 import contentUiCss from 'tinymce/skins/ui/oxide/content.css'
 import contentCss from 'tinymce/skins/content/default/content.css'

import 'tinymce/plugins/a11ychecker'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/advcode'
import 'tinymce/plugins/advtable'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/checklist'
import 'tinymce/plugins/export'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/powerpaste'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/formatpainter'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/table'
import 'tinymce/plugins/help'
import 'tinymce/plugins/wordcount'

import 'tinymce/skins/ui/oxide/skin.css'

import 'tinymce/themes/silver'

const key = '3jis0sk0g56nxb4wnbunts56hlss4w2tyysc088w7xch6k5k';

enum EHashKeys {
  'chip-coin' = '$',
  'chip-terminology' = '#',
  'chip-related-article' = '#',
}

const emit = defineEmits(['input']);

const content = ref('');

const handleClickChipCoin = () => {
  const currentContentSelect = getTinymce().activeEditor.selection.getContent({
    format: 'text',
  });
  if (currentContentSelect.trim() === '') return;
  if (currentContentSelect.includes(EHashKeys['chip-coin'])) {
    getTinymce().activeEditor.insertContent(
      currentContentSelect.replace('$', '').replace('#', '').replaceAll('"', '')
    );
    return;
  }
  getTinymce().activeEditor.insertContent(
    `${EHashKeys['chip-coin']}${currentContentSelect.replace('#', '')}`
  );
};

const handleClickChipTerminologyOrRelated = () => {
  const currentContentSelect = getTinymce().activeEditor.selection.getContent({
    format: 'text',
  });
  if (currentContentSelect.trim() === '') return;
  if (
    currentContentSelect.includes(EHashKeys['chip-terminology']) ||
    currentContentSelect.includes(EHashKeys['chip-related-article'])
  ) {
    getTinymce().activeEditor.insertContent(
      currentContentSelect.replace('$', '').replace('#', '').replaceAll('"', '')
    );
    return;
  }
  getTinymce().activeEditor.insertContent(
    `${EHashKeys['chip-terminology']}"${currentContentSelect.replace('$', '')}"`
  );
};

watch(content, (val) => {
  console.log(val);
	emit('input', val)
});
</script>
