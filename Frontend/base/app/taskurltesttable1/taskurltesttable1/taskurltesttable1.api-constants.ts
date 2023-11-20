import { Taskurltesttable1Base} from '@baseapp/taskurltesttable1/taskurltesttable1/taskurltesttable1.base.model';

export class Taskurltesttable1ApiConstants {
    public static readonly getById: any = {
        url: '/rest/taskurltesttable1s/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/taskurltesttable1s/',
        method: 'POST',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/taskurltesttable1s/',
        method: 'PUT',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/taskurltesttable1s/autosuggest',
        method: 'GET',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/taskurltesttable1s/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly delete: any = {
        url: '/rest/taskurltesttable1s/{ids}',
        method: 'DELETE',
        showloading: true
    };
}