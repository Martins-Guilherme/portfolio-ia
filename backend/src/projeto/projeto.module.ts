import { Module } from '@nestjs/common'
import { ProjetoController } from './projeto.controller'
import { ProjetoPrisma } from './projeto.prisma'
import { DbModule } from 'src/db/db.module'

@Module({
  providers: [ProjetoPrisma],
  controllers: [ProjetoController],
  imports: [DbModule]
})
export class ProjetoModule {}
