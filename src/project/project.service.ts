import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}
  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }
  async findOne(id: number): Promise<Project> {
    return this.projectRepository.findOne(id);
  }
}
