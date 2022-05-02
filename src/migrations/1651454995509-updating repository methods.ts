import {MigrationInterface, QueryRunner} from "typeorm";

export class updatingRepositoryMethods1651454995509 implements MigrationInterface {
    name = 'updatingRepositoryMethods1651454995509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdm" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isAdm" DROP DEFAULT`);
    }

}
