class Ticket < ActiveRecord::Base
  attr_accessible :complexity, :description, :due_at, :owner_id, :requestor_id, :ticket_type, :title

  validates_presence_of :title

  belongs_to :owner, :class_name => Hacker
  belongs_to :requestor, :class_name => Hacker
end
