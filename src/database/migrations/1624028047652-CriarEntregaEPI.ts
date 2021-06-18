import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CriarEntregaEPI1624028047652 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'entregaEPI',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'funcionario_id',
            type: 'uuid',
          },
          {
            name: 'nome_epi',
            type: 'varchar',
          },
          {
            name: 'data_entrega',
            type: 'Date',
          },
          {
            name: 'quantidade_entregue',
            type: 'Number',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'entregaEPI',
      new TableForeignKey({
        name: 'FuncionarioFK',
        columnNames: ['funcionario_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'funcionarios',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('entregaEPI', 'FuncionarioFK');
    await queryRunner.dropTable('entregaEPI');
  }
}
