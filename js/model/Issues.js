import DI from '../DI/index';

export default class Issues {
    fetchAll() {
        throw new Error('Please implement in extended class');
    }
    
    emit(opt) {
        throw new Error('Please implement in extended class');
    }
}
DI.register(Issues);