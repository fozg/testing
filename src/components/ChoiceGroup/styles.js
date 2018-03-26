// import theming from '../../theming';

export default {
    wraplist: {
        flexDirection: 'row'
    },
    listitemWrap: {
        padding: 5,
        flex: 1
    },
    listitem: {
        borderWidth: 1,
        borderColor: window.theming.mainColor,
        borderStyle: 'solid',
        flex: 1,
        borderRadius: 5,
        padding: 5
    },
    listitemActive: {
        backgroundColor: window.theming.primaryBackgoundColorActive,
    },
    listitemText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: window.theming.mainColor,
    },
    listitemTextDescription: {
        textAlign: 'center',
        color: window.theming.primaryTextColor,
    },
    listitemTextActive: {
        color:  window.theming["primaryTextColor.active"]
    }
}
