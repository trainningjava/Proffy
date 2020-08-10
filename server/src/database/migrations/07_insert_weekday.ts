import Knex from "knex";

export async function up(knex: Knex) {
  return knex("weekday").insert([
    { week_day: "Domingo" },
    { week_day: "Segunda-feira" },
    { week_day: "Terça-feira" },
    { week_day: "Quarta-feira" },
    { week_day: "Quinta-feira" },
    { week_day: "Sexta-feira" },
    { week_day: "Sabado" },
  ]);
}

export async function down(knex: Knex) {
  return knex("weekday").del("*");
}
