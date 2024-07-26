import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor( 
    @InjectRepository(Task)
    private taskRepository: Repository<CreateTaskDto>,
  ){}
  async create(task:Task):Promise<CreateTaskDto> {
    const newTask = this.taskRepository.create(task)
    await this.taskRepository.save(newTask)
    return newTask
    
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }



  // update(id: number, updateTaskDto: UpdateTaskDto) {
  //   return `This action updates a #${id} task`;
  // }

  async delete(id: number): Promise<DeleteResult> {
    return this.taskRepository.delete(id);
  }
}
