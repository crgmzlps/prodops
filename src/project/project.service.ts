import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
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
  async save(createProjectDto: CreateProjectDto): Promise<Project> {
    const newProject = this.projectRepository.create(createProjectDto);
    newProject.createdBy = 'Anonymous';
    newProject.lastChangedBy = 'Anonymous';
    return this.projectRepository.save(newProject);
  }
}
