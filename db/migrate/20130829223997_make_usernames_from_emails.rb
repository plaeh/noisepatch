class MakeUsernamesFromEmails < ActiveRecord::Migration
  def up
    Hacker.all.each do |h|
      if h.username.blank?
      	h.username=h.email
      	h.save
      end
    end
  end
end
