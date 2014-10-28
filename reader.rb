require 'json'

for i in 1..56
  link = JSON.parse(IO.read("painters/#{i}/data.json"))['link']['wikipedia']['en']
  name = JSON.parse(IO.read("painters/#{i}/data.json"))['name']['en']
  id = JSON.parse(IO.read("painters/#{i}/data.json"))['id']
  puts "<a target='_blank' href='#{link}'>#{id}) #{name}</a><br>"
end