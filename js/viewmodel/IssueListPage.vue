<template src="../view/IssueListPage.html"></template>

<script>
import DI from '../DI/index';

// const VM_ISSUE_LIST_PAGE = Symbol('vm_issue_list_page');
const VM_ISSUE_LIST_PAGE = 'vm_issue_list_page';
const container = DI.container(VM_ISSUE_LIST_PAGE);
console.log(container);

export default {
    data: function(container) {
        console.log(container);
        return {
            issues: container.Issues
        }
    }
}
</script>