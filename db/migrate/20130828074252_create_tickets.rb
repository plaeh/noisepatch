class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :title
      t.text :description
      t.string :ticket_type
      t.datetime :due_at
      t.integer :complexity
      t.integer :requestor_id
      t.integer :owner_id

      t.timestamps
    end
  end
end
