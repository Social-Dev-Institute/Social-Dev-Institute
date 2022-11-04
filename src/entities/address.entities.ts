import {  Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Campaigns } from "./campaign.entities";

@Entity("Address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 100 })
  road: string;

  @Column({ length: 50 })
  number: string;

  @Column({ length: 120 })
  complement: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @ManyToOne(() => Campaigns)
  campaigns: Campaigns

}