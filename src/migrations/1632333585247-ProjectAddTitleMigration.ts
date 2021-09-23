import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProjectAddTitleMigration1632333585247
  implements MigrationInterface
{
  name = 'ProjectAddTitleMigration1632333585247';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."projects" ADD "title" character varying(300) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."projects" DROP COLUMN "title"`,
    );
  }
}
