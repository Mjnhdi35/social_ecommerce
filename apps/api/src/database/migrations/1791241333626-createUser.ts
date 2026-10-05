import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1791241333626 implements MigrationInterface {
    name = 'CreateUser1791241333626'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "username" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "username"`);
    }

}
