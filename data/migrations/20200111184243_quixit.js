exports.up = function (knex) {
  return knex.schema
    .createTable('users', t => {
      t.string('uid', 128).unique().primary();
      t.string('stripe_id').unique();
      t.string('payout_id');
      t.string('firstName');
      t.string('lastName');
      t.string('avatar', 255);
      t.string('nickname').unique();
      t.string('email').unique();
      t.boolean('isContractor').defaultTo(false);
      t.string('address');
      t.string('phone');
      t.string('category');
      t.boolean('isBoarded').defaultTo(false);
      t.integer('balance', 128).defaultTo(0);
    })
    .createTable('services', t => {
      t.increments();
      t.string('service_name', 128).notNullable().unique();
    })
    .createTable('projects', t => {
      t.increments();
      t.string('FK_homeowner_id')
        .notNullable()
        .references('uid')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.string('project_title', 128).notNullable();
      t.string('description', 500).notNullable();
      t.boolean('material_included').defaultTo(false);
      t.boolean('is_active').defaultTo(true);
      t.integer('budget').defaultTo(0);
      t.string('category', 128).notNullable();
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('bids', t => {
      t.increments();
      t.integer('FK_project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.string('FK_contractor_id')
        .notNullable()
        .references('uid')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.integer('price').notNullable();
      t.integer('duration').defaultTo(1);
      t.boolean('material_included').defaultTo(false);
      t.boolean('is_accepted').defaultTo(false);
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('project_images', t => {
      t.increments();
      t.integer('FK_project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.string('image', 255);
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('project_agreement', t => {
      t.integer('FK_project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.string('FK_contractor_id')
        .notNullable()
        .references('uid')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.timestamp('created_at').defaultTo(knex.fn.now());
      t.primary(['FK_project_id', 'FK_contractor_id']);
    })
    .createTable('feedback', t => {
      t.increments();
      t.string('FK_contractor_id')
        .notNullable()
        .references('uid')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.string('reviewer_name', 255).notNullable();
      t.string('feedback_title', 255).notNullable();
      t.string('description', 255).notNullable();
      t.integer('rating');
      t.boolean('recommend').defaultTo(true);
      t.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('invoices', t => {
      t.increments();
      t.string('FK_contractor_id')
        .notNullable()
        .references('uid')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.integer('FK_project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.integer('amount', 255).notNullable();
      t.datetime('paid_at').defaultTo(null);
      t.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('invoices')
    .dropTableIfExists('feedback')
    .dropTableIfExists('project_agreement')
    .dropTableIfExists('project_images')
    .dropTableIfExists('bids')
    .dropTableIfExists('projects')
    .dropTableIfExists('services')
    .dropTableIfExists('users');
};
