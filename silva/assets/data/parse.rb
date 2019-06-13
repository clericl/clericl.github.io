# parsing a TSV file dump into JSON

require 'rubygems'
require 'json'
require 'csv'


lines = CSV.open("etymwn.tsv", "r:utf-8", col_sep: "\t").readlines
keys = lines.delete lines.first

File.open("etymwn.json", "w:utf-8") do |f|
  data = lines.map do |values|
    Hash[keys.zip(values)]
  end
  f.puts JSON.pretty_generate(data)
end