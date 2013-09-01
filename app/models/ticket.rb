class Ticket < ActiveRecord::Base
  attr_accessible :complexity, :description, :due_at, :owner_id, :requestor_id, 
  		:ticket_type, :title, :status

  validates :title, presence: true
  validate :complexity, numericality: true, format: { with: /[0-8]+/ }

  belongs_to :owner, :class_name => Hacker
  belongs_to :requestor, :class_name => Hacker

  STATUS_TYPES = {
    :open => 'Open',
    :resolved => 'Resolved'
  }
end
