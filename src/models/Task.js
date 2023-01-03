import { Schema, model }    from 'mongoose';
import mongoosePaginate     from 'mongoose-paginate';

const taksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required:true
    }
})

taksSchema.set('timestamps', true);
taksSchema.plugin(mongoosePaginate);

const TaskModel = model('task', taksSchema);

export default TaskModel;