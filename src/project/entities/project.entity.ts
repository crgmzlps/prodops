import { Entity } from 'typeorm';
import { Base } from '../../common/entities/base.entity';

@Entity({ name: 'projects' })
export class Project extends Base {}