declare module "*.vue" {
    import Vue from 'vue'
    export default Vue
}

declare namespace UniApp {
    interface Uni {
        $u: { [propName: string]: any }
    }
}

declare module 'uview-ui'
declare module 'uview-ui/libs/function/md5'