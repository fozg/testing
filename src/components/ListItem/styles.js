import _theming from '../../theming';

export default (theming) => ({
    wrap: {
        padding: 8,
        flex: 1,
        marginBottom: 5,
        ...theming.wrap
    }
})
