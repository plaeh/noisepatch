class AddUsernameToHackers < ActiveRecord::Migration
  def change
    add_column :hackers, :username, :string
    add_index :hackers, :username, :unique => true
  end
end
