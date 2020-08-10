import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("weekday", (table) => {
    table.increments("id").primary();
    table.string("week_day").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("week_day");
}
