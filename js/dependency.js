import DI from './DI/index';
import { VM_ISSUE_LIST_PAGE } from './viewmodel/IssueListPage';

export default function() {
    DI.inject('vm_issue_list_page', {
        Issues: require('./model/IssuesImpl')
    });
}
