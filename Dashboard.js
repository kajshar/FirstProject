require([
      'underscore',
      'jquery',
      'splunkjs/mvc',
      'splunkjs/mvc/tableview',
      'splunkjs/mvc/simplexml/ready!'
  ], function(_, $, mvc, TableView) {



    var CustomRangeRenderer = TableView.BaseCellRenderer.extend({
        canRender: function(cell) {
            return cell.field;
        },
        render: function($td, cell) {
            var value = cell.value;
            
            if(value=="UP" )
                {
                    $td.html("<div class='up'> </div>")
                }
            else if(value=="DOWN")
            {
                    $td.html("<div class='down'> </div>")
            }
            else if(value=="UNKNOWN" || value=="N/A")
            {
                    $td.html("<div class='unknown'> </div>")
            }
            else if(value=="WARN")
            {
                    $td.html("<div class='warn'> </div>")
            }
                
		}

       
    });

//List of table IDs to add icon
    var tableIDs = ["sample", "sample1", "sample2", "sample3","sample4","sample5, "sample19"];
    for (i = 0; i < tableIDs.length; i++) {
        //var sh = mvc.Components.get("sample");
        var sh = mvc.Components.get(tableIDs[i]);
        if (typeof(sh) != "undefined") {
            sh.getVisualization(function(tableView) {
                // Add custom cell renderer and force re-render
                tableView.table.addCellRenderer(new CustomRangeRenderer());
                tableView.table.render();
            });
        }
    }
});				
