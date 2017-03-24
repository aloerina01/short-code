import GitHub from 'github-api';
import Issues from './Issues';
import eventEmitter from '../eventEmitter';

export default class IssuesImpl extends Issues {
    constructor() {
        super();
        this.issues;
        this._gh = new GitHub({ token: 'ad3213fa96172d0950c9ce406ec6f526bebded44' });
    }
    fetchAll() {
        let issuesObj = this._gh.getIssues('vuejs', 'vue');
        issuesObj.getIssues()
        .then((issues) => {
            console.log(issues);
            this.emit(issues);
        })
    }
    emit(opt) {
        eventEmitter.$emit('Issues_fetchAll', opt);
    }
    get issues() {
        return this.issues;
    }
}