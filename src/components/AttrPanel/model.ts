import InputBlock from '../InputBlock';
import InputText from '../InputText';
import BannerController from '../BannerController';
export default {
    width: {
        group: 'w-h',
        Component: InputBlock,
        valueKey: 'width',
        props: {
            unit: 'W',
            id: 'width'
        }
    },
    height: {
        group: 'w-h',
        Component: InputBlock,
        valueKey: 'height',
        props: {
            unit: 'H',
            id: 'height'
        }
    },
    text: {
        group: 'text',
        Component: InputText,
        valueKey: 'text',
        props: {
            id: 'text',
            title: '文本',
            placeholder: '请输入文字'
        }
    },
    link: {
        group: 'link',
        Component: InputText,
        valueKey: 'link',
        props: {
            id: 'link',
            title: '链接',
            placeholder: '请输入跳转链接'
        }
    },
    banner: {
        group: 'banner',
        Component: BannerController,
        valueKey: 'banners',
        props: {
            id: 'banners',
        }
    }
}